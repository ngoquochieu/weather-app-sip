const { geocoder } = require('geocoder-opencagedata');
const coder = new geocoder({api_key: `2657b76ce5fd4f9f87f8b1c0a2b061e4`})

const getLocation = async(req, res, next) => {
    const city = req.params.city;
    coder.geocode(city).then(resp => {
        if (resp.ok) {
            // console.log('Geo coordinates:', resp.geo)
            return res.status(200).json(resp.geo);
        }
        else {
            console.log('Request has failed')
            console.log('Check the full response from OpenCageData:', resp)
            console.log('Or you can check response status only:', resp.status.code, resp.status.message)
        }
    })
}

const test = async (req, res, next) => {
    coder.geocode('21.0294498, 105.8544441').then(resp => {

    if (resp.ok) {

        console.log('Full response:', resp)
        console.log('The most probable address:', resp.address)
        //you may also want to check all other suggestions provided in array: resp.results
        //for more details on response properties please consult with API Reference at https://opencagedata.com/api#reverse-resp
    }
})
}
module.exports = {
    getLocation,
    test
}