//Get company i.e organization details
export const CollectCompanyData = async (token) => {
  try {
    let response = await fetch(
      'http://54.82.231.80:3117/affivo/organizations', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        authToken: token
      }
    });
    let json = await response.json();
    console.log("companydata json  returned is ", json);
    if (json.hasOwnProperty('data') && json['data'] !== "") {
      return json.data;

    }
    else {
      return "";
    }

    // return json.movies;
  } catch (error) {
    console.error(error);
  }
}

//Get Request for Sales data
export const CollectSalesData = async (token) => {
  try {
    let response = await fetch(
      'http://54.82.231.80:3117/affivo/sales', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        authToken: token
      }
    });
    let json = await response.json();
    console.log("Sales data json  returned is ", json);
    if (json.hasOwnProperty('data') && json['data'] !== "") {
      return json.data;

    }
    else {
      return "";
    }

    // return json.movies;
  } catch (error) {
    console.error(error);
  }
}

//Get Request for Purchase data
export const CollectPurchaseData = async (token) => {
  try {
    let response = await fetch(
      'http://54.82.231.80:3117/affivo/purchases', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        authToken: token
      }
    });
    let json = await response.json();
    console.log("Purchase data json  returned is ", json);
    if (json.hasOwnProperty('data') && json['data'] !== "") {
      return json.data;

    }
    else {
      return "";
    }

    // return json.movies;
  } catch (error) {
    console.error(error);
  }
}