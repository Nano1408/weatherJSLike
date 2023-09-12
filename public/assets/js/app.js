function fetchWeather(){
    const apiKey = '82ee77e2a6ad43f12b2de1788801e76b';
    const queriedCity = document.getElementById('city').value;

    if(queriedCity ==''){
        alert('Please write a city to fetch');
        return
    }
    



    const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}&appid=${apiKey}&lang=es&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.main)
            console.log(data.wind)

            const {main, weather, wind} = data;

            const teperature = main.temp.toFixed(0);
            const temp_min = main.temp_min.toFixed(0);
            const humidity = main.humidity;
            const windSpeed = wind.speed;
            const icon = weather[0].icon;
            const description = weather[0].description;

            const textCity = document.createElement('h2');
            textCity.textContent = queriedCity;

            const container = document.querySelector('.titleCity');
            container.innerHTML = '';
            container.appendChild(textCity);

            document.getElementById('temp').innerHTML=`
            <p class="temperature">${teperature}ºC</p>
            `;

            document.querySelector('.info').innerHTML=`
            <hr>
            <p class="temp"><span class="descriptionSpan">Temp-Min</span> <span class="magnitud">${temp_min}ºC</span></p>
            <p class="temp"><span class="descriptionSpan">Viento</span> <span class="magnitud">${windSpeed}m/s</span></p>
            <p class="temp"><span class="descriptionSpan">Humedad</span> <span class="magnitud">${humidity}%</span></p>
            `;

            document.querySelector('.description').innerHTML=`
            <p class="description">${description}</p>
            `;

            document.querySelector('.icon').innerHTML=`
            <img class="iconClima" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="System icon"/>
            `;

            //imagenes de fondo dependiendo el clima
            console.log('Icono:', icon);
            const backgroundImage = {
                //dia
                '01d': 'https://img.freepik.com/foto-gratis/hojas-verdes-sol_1127-3826.jpg?size=626&ext=jpg&ga=GA1.2.1413851642.1693077997&semt=ais',
                '02d': 'https://img.freepik.com/fotos-premium/campo-brillante-prado-arboles-pinos-cielo-nubes-espacio-copia_507658-327.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '03d': 'https://img.freepik.com/foto-gratis/cielo-azul-algunos-consejos-nube-arbol_53876-14210.jpg?size=626&ext=jpg&ga=GA1.2.1413851642.1693077997&semt=ais',
                '04d': 'https://img.freepik.com/foto-gratis/rayos-crepusculares_181624-471.jpg?size=626&ext=jpg&ga=GA1.2.1413851642.1693077997&semt=ais',
                '09d': 'https://img.freepik.com/foto-gratis/composicion-efectos-meteorologicos_23-2149853295.jpg?size=626&ext=jpg&ga=GA1.2.1413851642.1693077997&semt=ais',
                '10d': 'https://img.freepik.com/foto-gratis/hermosa-vista-gotas-lluvia-rodando-ventana-rascacielos-superficie_181624-52199.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '11d': 'https://img.freepik.com/foto-gratis/hermosa-foto-rayo-zagreb-croacia_181624-13398.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '13d': 'https://img.freepik.com/foto-gratis/montana-nevada_1160-141.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '50d': 'https://img.freepik.com/foto-gratis/paisaje-montanoso-parque-natural-three-peaks-italia_181624-44990.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                //noche
                '01n': 'https://img.freepik.com/foto-gratis/cielo-nocturno-angulo_23-2148282354.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '02n': 'https://img.freepik.com/foto-gratis/siluetas-colinas-farolas-cielo-nublado-hermosa-puesta-sol_181624-28611.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '03n': 'https://img.freepik.com/foto-gratis/cielo-azul-nubes-cerca_150588-124.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '04n': 'https://img.freepik.com/foto-gratis/vista-cielo-nublado_1107-47.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '09n': 'https://img.freepik.com/foto-gratis/luces-urbanas-misteriosas-estetica-cinematografica_23-2149098551.jpg?w=1060&t=st=1694319430~exp=1694320030~hmac=e9afdebadafb8eae21edf7cf3033b2031d5aa3fa8c8e5796168fb55c3da30cb5',
                '10n': 'https://img.freepik.com/fotos-premium/calle-lluviosa-exposicion-larga-noche_971034-362.jpg?w=1800',
                '11n': 'https://img.freepik.com/foto-gratis/tormenta-electrica-maldivas_181624-35910.jpg?size=626&ext=jpg&ga=GA1.1.1413851642.1693077997&semt=ais',
                '13n': 'https://img.freepik.com/foto-gratis/camino-nevado-iluminado-parque-fria-noche-invierno_181624-42587.jpg?w=2000&t=st=1694319528~exp=1694320128~hmac=ebfa40b59a8d86254bbcb8317a88c281b7029a3da1bbf34c8c43645e40d1f010',
                '50n': 'https://img.freepik.com/foto-gratis/paisaje-sobre-volcan-batur-bali-indonesia_72229-1010.jpg?size=626&ext=jpg&ga=GA1.2.1413851642.1693077997&semt=ais',
            }

            function changeBackgroundImage() {
                const imgBody = document.querySelector('body')

                if(backgroundImage.hasOwnProperty(icon)){
                    imgBody.style.backgroundImage = `url('${backgroundImage[icon]}')`;
                }else{
                    imgBody.style.backgroundImage = url('https://img.freepik.com/foto-gratis/rayos-crepusculares_181624-471.jpg?size=626&ext=jpg&ga=GA1.2.1413851642.1693077997&semt=ais');
                }
            }

            changeBackgroundImage();

        })
        .catch(error => console.log(error))
}