import express from 'express';
const app = express()
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
const port = process.env.PORT || 8000
import loginsignup from './Routes/Login and Sign.js'
import cors from 'cors';

// app.use(cors({
//     origin: ['http://localhost:3000', 'https://localhost:3000', "*"],
//     credentials: true
// }));

app.use(cors())

console.log("I am server file");
app.use(express.json());
app.use(cookieParser());


app.use('/api/v1', loginsignup)
app.use('/api/v1', (req, res, next) => {

    console.log("req.cookies: ", req.cookies);

    if (!req?.cookies?.Token) {
        res.status(401).send({
            message: "include http-only credentials with every request"
        })
        return;
    }

    jwt.verify(req.cookies.Token, SECRET, function (err, decodedData) {
        if (!err) {

            console.log("decodedData: ", decodedData);

            const nowDate = new Date().getTime() / 1000;

            if (decodedData.exp < nowDate) {

                res.status(401);
                res.cookie('Token', '', {
                    maxAge: 1,
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true
                });
                res.send({ message: "token expired" })

            } else {

                console.log("token approved");

                req.body.token = decodedData
                next();
            }
        } else {
            res.status(401).send("invalid token")
        }
    });
})


const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './my-app/build')))
app.use('*', express.static(path.join(__dirname, './my-app/build')))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})