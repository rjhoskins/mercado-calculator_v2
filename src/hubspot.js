// import { generateHubSpotAPIData } from './data'
import { get } from 'svelte/store';
import { DetailsFormDataStore, ImportsFormDataStore } from './store'
const hiddenData = {
  source: "ROI Calculator",
  lifecyclestage: "salesqualifiedlead",
  hs_lead_status: "NEW",
  type: "Prospects",
}


async function sendHubSpotData(isTest) {
  const detailsData = get(DetailsFormDataStore)
  const importsData = get(ImportsFormDataStore)
  const bigBoi = { ...detailsData, ...importsData, ...hiddenData }
  // console.log('big boi', { ...detailsData, ...importsData, ...hiddenData })
  const data = await generateHubSpotAPIData(bigBoi)
  console.log('data being "sent" to API...😉', data);


  let email = detailsData.email
  console.log('email...', email);
  console.log('bigBoi...', bigBoi);
  fetch('https://mercadolabs.com/wp-json/hubspot/v1/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": detailsData.email,
      "properties": await generateHubSpotAPIData(bigBoi)
    }
    )
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


}



//legacy API formatting 
const generateHubSpotAPIData = async (data) => {
  try {

    return new Promise(async function (resolve, reject) {

      const hubSpotData = Object.keys(data).map(prop => ({ property: prop, value: data[prop] }));
      resolve(hubSpotData)
    })

  } catch (error) {
    console.log(error);
    reject(error)

  }
}

export { sendHubSpotData }