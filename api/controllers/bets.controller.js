import Bets from "../models/Bets.js";
import User from "../models/User.js";

export const sendBet = async ( req,res ) => {
    try {
        const { match,user,winner,status } = req.body;
        console.log(winner);
        const newBet = new Bets({
            match,
            user,
            winner,
            status
        })
        const foundBet = await Bets.find({match})
        console.log(foundBet.map(users => users.user[0].username));
       
        if(foundBet){
            const getFoundBets = foundBet.map(users => users.user[0].username);
            if(getFoundBets.includes(user[0].username)){
                return res.status(203).json({ message: 'El usuario ya realizo esta apuesta!', status:203 });
            }
        } 


        // return res.status(203).json({message: 'El usuario ya realizo esta apuesta!', status:203});
        await newBet.save();
        res.status(200).json({message: 'Se guardo la apuesta en BDD', status:200});
    } catch (error) {
        console.log(error);
        res.status(400).json({error,status:400});
    }
}

export const getBets = async ( req,res ) => {
    try {
        const bets = await Bets.find();
        res.status(200).json(bets);
    } catch (error) {
        res.status(400).json({error});
    }
}