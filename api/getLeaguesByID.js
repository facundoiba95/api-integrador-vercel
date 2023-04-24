export default async ( req,res ) => {
    try {
        const { idLeague } = req.body;
        const connect = await fetch(`https://api.unidadeditorial.es/sports/v1/classifications/current/?site=8&type=10&tournament=0${idLeague}`)
        const resApi = [await connect.json()];
        res.status(200).json(resApi[0].data[0]) 
    } catch (error) {
        console.log(error);
        res.json({message: error})
    }
}