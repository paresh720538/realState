import * as config from '../config.js';

export const welcome = (req, res) => {
    res.json({
        data: "hello from node js api paresh",
    });
}
export const preRegister = async (req, res) => {
    //create a jwt with email and password 
    //only when user click on email that means when registration completed 
    try {
        console.log(req.body);
        const params = {

            Source: config.EMAIL_FROM,
            Destination: {
                ToAddresses: [config.REPLY_TO],
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: `
                        <h1>Welcome to the paresh world</h1>
                        `,

                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: "welcome !!!",
                },
            },


        };

        const succcessful = config.AWSSES.sendEmail(params).promise();
        succcessful.then((data) => {
            console.log(data);
            return res.json({ ok: true });
        })
            .catch((err) => {
                console.log(err);
                return res.json({ ok: false });
            })

    } catch (error) {
        console.log(error);
        return res.json({ error: "something went wrong .Try again" });
    }
};        