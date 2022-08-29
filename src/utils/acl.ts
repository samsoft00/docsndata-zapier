import { NextFunction, Request, Response } from "express"
import auth from "basic-auth"

import { users, teams } from "../db/user.db"

export default () => {
    return async (req: Request, res: Response, next: NextFunction) => {

        const WRONG_CREDENTIALS = "Wrong authentication credentials"
        const authCred = auth(req)
        console.log(authCred)
        
        if (!authCred || !authCred.name) {
            return res.status(401).set('WWW-Authenticate', 'Basic realm="API", charset="UTF-8"')
            .json({ error: 'Authentication missing' })
        }
        
        // Check team exists
        const team = teams.find(team => team.id === authCred.name)
        if (!team) { return res.status(401).json({ error: WRONG_CREDENTIALS }) }

        const user = users.find(u => u.teamId === authCred.name)
        if (!user) { return res.status(401).json({ error: WRONG_CREDENTIALS }) }

        req.user = {
            id: user.id,
            email: user.email,
            name: user.name,
            teamId: user.teamId,
            team: {
                id: team.id,
                name: team.name
            }
        }

        next()
    }
}