import { sendMail } from "../../service/mailService";


const handler = async (req, res) => {
  try {
    const { method } = req;
    const { formDatas,price,customPrice} = req.body;
   
   
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          formDatas.email,
          "Payment Successful",
          `${formDatas.email}`,
          `<table cellspacing="0" cellpadding="10" border="0" style="border-collapse: collapse;
          width: 100%;
          margin-bottom: 20px;">
                  <tr>
                      <td ">
                          <h1>Payment Success</h1>
                      </td>
                  </tr>
                  <tr>
                      <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                          <strong>Name:</strong>
                      </td>
                  
                      <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                          ${formDatas.name}
                      </td>
                  </tr>
        
                  <tr>
                      <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                          <strong>Phone Number:</strong>
                      </td>
                   
                      <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                            ${formDatas.phoneNum}
                      </td>
                 
                  </tr>
                  
                  <tr>
                      <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                          <strong>Email Address:</strong>
                      </td>
                    
                      <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                            ${formDatas.email}
                      </td>
                
                  </tr>
                  
                  <tr>
                      <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                          <strong>Address:</strong>
                      </td>
                    
                      <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                            ${formDatas.address1}
                      </td>
                 
                  </tr>
                  
                  <tr>
                  <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                      <strong>Service address:</strong>
                  </td>
                    
                  <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                        ${formDatas.address2 || "Same as above"}
                  </td>
            
              </tr>
             
              <tr>
                  <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                      <strong>Price:</strong>
                  </td>
                    
                  <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                        ${price}
                  </td>
            
              </tr>
              <tr>
                  <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                      <strong>Number Of Driveaway:</strong>
                  </td>
                    
                  <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                        ${customPrice.noOfDriveway == undefined ? "Custom Price": customPrice.noOfDriveway}
                  </td>
            
              </tr>
              <tr>
                  <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                      <strong>Number Of Sidewalk:</strong>
                  </td>
                    
                  <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                        ${customPrice.noOfSideWalk == undefined? "Custom Price" : customPrice.noOfSideWalk}
                  </td>
            
              </tr>
              <tr>
                  <td style="background-color: #f2f2f2;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                      <strong>Number Of Boulevards:</strong>
                  </td>
                    
                  <td style=" border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">
                        ${customPrice.noOfBoulder == undefined ? "Custom Price" : customPrice.noOfBoulder}
                  </td>
            
              </tr>
              </table>`
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;