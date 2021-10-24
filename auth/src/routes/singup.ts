import express, {Request, Response} from "express";
import {body, validationResult} from 'express-validator'
import jwt from 'jsonwebtoken'
import {RequestValidationErrors} from "../errors/request-validation-errors";
import {User} from "../models/user";
import {BadRequestError} from "../errors/bad-request-error";

const router = express.Router();

router.post('/api/users/singup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage('Min 4, max 20')
], async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        throw new RequestValidationErrors(errors.array())
    }

    const {email, password} = req.body

    const existingUser = await User.findOne({email})

    if (existingUser) {
        throw new BadRequestError('Email in use')
    }

    const user = new User({
        email: email,
        password: password
    })
    await user.save()

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, 'ttt')

    req.session = {
        jwt: userJwt
    }

    res.status(201).send(user)

})

export {router as singupRouter}

