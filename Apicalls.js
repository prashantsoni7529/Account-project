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
      'http://54.82.231.80:3117/affivo/sales?month=current&pageNumber=1', {
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

//Add new sale
export const AddNewSale = async (obj) => {
  console.log("inside addnew sale obj is ", JSON.stringify(obj));
  try {
    let response = await fetch(
      'http://54.82.231.80:3117/affivo/sales', {
      method: 'POST',

      body: JSON.stringify(obj),

    });
    console.log("response is ",response);
    let json = await response.json();
    console.log("Adding sales json is", json);
    if (json['message'] === "Sales Invoice added Successfully" || json['code'] === '200') {
      console.log("Sale added successfully");
      alert("Sale added successfully");
    }
    else {
      alert("Sale not added");
    }

    // return json.movies;
  } catch (error) {
    console.error("Error is ", error);
    // throw error;
  }
}

// export const AddNewSale = async (obj) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(obj)
// };
//   try {
//       await fetch(
//         'http://54.82.231.80:3117/affivo/sales', requestOptions)
//           .then(response => {
//               response.json()
//                   .then(data => {
//                       console.log("sales data new is ",data);
//                       alert("New Sale added successfully"); 
                      
//                   });
//           })
//   }
//   catch (error) {
//       console.error("Error is",error);
//   }

// }