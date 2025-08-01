

function TokenValidation(token) {
    if(!token) return;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000);

        return payload.exp && payload.exp > currentTime
    } catch(error) {
        console.log("Invalid Token", error);
        return false;
    }
}

export default TokenValidation