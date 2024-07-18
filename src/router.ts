import { Router } from 'express'
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { getTeams } from './handlers/team';
import { getPlayers } from './handlers/player';


const router = Router()

/**
 * Team
 */
router.get('/teams/:league/:season', getTeams)

/**
 * Player
 */
router.get('/players/:team', getPlayers)



export default router