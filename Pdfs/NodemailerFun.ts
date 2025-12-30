
// ResetPassword Mail using Nodemailer
import { Request, Response } from "express";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
const GITEA_URL = process.env.GITEA_URL || "http://<your-gitea-server>/api/v1";
const GITEA_USERNAME = process.env.GITEA_USERNAME;
const GITEA_PASSWORD = process.env.GITEA_PASSWORD;

// if (!ACCESS_TOKEN) {
//     console.error("ACCESS_TOKEN is missing in .env file.");
//     process.exit(1);
// }
// if (!GITEA_USERNAME || !GITEA_PASSWORD) {
//     console.error("GITEA_USERNAME or GITEA_PASSWORD is missing in .env file.");
//     process.exit(1);
// }

// const authHeader = `Basic ${Buffer.from(`${GITEA_USERNAME}:${GITEA_PASSWORD}`).toString("base64")}`;
//  const  Repocreate = async (req: Request, res: Response): Promise<void> =>{
//      console.log(' req.body: ',  req.body);
//     const { name, description, private: isPrivate } = req.body;
//     if (!name) {
//          res.status(400).json({ error: "Repository name is required" });
//          return
//     }
//     try {
//         const response = await axios.post(
//             `${GITEA_URL}/user/repos`,
//             {
//                 name,
//                 description,
//                 private: isPrivate || false, 
//             },
//             {
//                 headers: {
//                     Authorization:authHeader,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         res.status(201).json({
//             message: "Repository created successfully",
//             repository: response.data,
//         });
//     } catch (error:any) {
//         if (axios.isAxiosError(error)) {
//             console.error(`Gitea API Error: ${error.response?.status}, ${error.response?.data}`);
//             res.status(error.response?.status || 500).json({
//                 error: error.response?.data.message || "Failed to create repository",
//             });
//         } else {
//             console.error(`Unexpected Error: ${error}`);
//             res.status(500).json({ error: "Internal server error" });
//         }
//     }
// }
// export default Repocreate

import nodemailer from "nodemailer"

console.log('process.env.EMAIL_ID: ', process.env.EMAIL_USER);
console.log('process.env.EMAIL_PASS: ', process.env.EMAIL_PASS);
const transport = nodemailer.createTransport({service:"gmail",
    secure: true,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})
var mailOptions = {
    from: 'nivetha@hexrfactory.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transport.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 const  Repocreate = async (req: Request, res: Response): Promise<void> =>{
    try {
        const { to, subject, text,attachments }: { to: string; subject: string; text: string,attachments:string[] } = req.body;
        if (!to || !subject || !text) {
            res.status(400).json({ error: "Missing required fields: to, subject, text" });
            return;
        }
        

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            attachments: attachments.map((attachment) => ({
                filename: attachment.split('/').pop() || 'file.pdf',
                path: attachment
            }))
        }
        attachments.map((attachment) => ({
         filename: attachment.split('/').pop() || 'file.pdf',
            path: attachment

        }))
        transport.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                return res.status(500).send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).send('Email sent successfully');
            }
        });
    } catch (error:any) {
        console.error("Unexpected Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
export default Repocreate