const internet_status = document.querySelector('#status');
const internet_ip = document.querySelector('#ip_add')
const internet_strength = document.querySelector('#network_strength');
const retry_button = document.querySelector('#retry_button');

internet_status.innerHTML = `connection - checking.....`


if (navigator.onLine) {

    setTimeout(() => {
        fetch("https://api.ipify.org?format=json")
            .then((resposne) => resposne.json())
            .then((data) => {
                console.log(data)
                internet_ip.innerHTML = `ipAdress - ${data.ip}`;
                internet_status.innerHTML = `connection - connected`

                const connection = navigator.connection;
                internet_strength.innerHTML = `network strength - ${connection ? connection.downlink + 'Mbps' : 'Unknown'}`
            })

    }, 2000);
}
else {
    setTimeout(() => {
        internet_status.innerHTML = `connection - disconnected`
        internet_ip.innerHTML = `ipAdress - Unknown`;
    }, 2000);

}

retry_button.addEventListener('click',(e)=>{
    location.reload();
})
