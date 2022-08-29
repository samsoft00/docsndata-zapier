import { Team } from "db/user.db"

declare module 'express' {
    interface Request {
      user: {
        id: string
        email: string
        name?: string
        teamId: string
        team?: Partial<Team>
      }
    }
  }

  export {}