import { NextFunction, Request, Response } from "express"
import auth from "basic-auth"

import { users, teams } from "../db/user.db"

export default () => {
    return async (req: Request, res: Response, next: NextFunction) => {

        const WRONG_CREDENTIALS = "Wrong authentication credentials"
        const user = auth(req)
        
        if (!user || !user.name) {
            return res.status(401).set('WWW-Authenticate', 'Basic realm="API", charset="UTF-8"')
            .json({ error: 'Authentication missing' })
        }
        
        // Check team exists
        const checkTeam = teams.find(team => team.id === user.name)
        if (!checkTeam) { return res.status(401).json({ error: WRONG_CREDENTIALS }) }

        const userFound = users.find(u => u.teamId === user.name)
        if (!userFound) { return res.status(401).json({ error: WRONG_CREDENTIALS }) }

        req.user = {
            id: userFound.id,
            email: userFound.email,
            name: userFound.name,
            teamId: userFound.teamId
        }

        next()
    }
}