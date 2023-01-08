// import { generateHubSpotAPIData } from './data'

async function sendHubSpotData(isTest) {
  // const data = await generateHubSpotAPIData()
  if (isTest) {
    console.log('data being "sent" to API...😉', data);
    return
  }


  let email = data[2].value;
  fetch('https://mercadolabs.com/wp-json/hubspot/v1/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": email,
      "properties": data
    }
    )
  })
    .then(res => res.json())
    .catch(err => console.log(err))


  return false;

}



//legacy API formatting 
const generateHubSpotAPIData = async () => {
  try {

    return new Promise(async function (resolve, reject) {
      const formData = await getFormData();
      const hubSpotData = Object.keys(formData).map(prop => ({ property: prop, value: formData[prop] }));
      _hubSpotAPIData = hubSpotData;
      resolve(hubSpotData)
    })

  } catch (error) {
    console.log(error);
    reject(error)

  }
}

export { sendHubSpotData }