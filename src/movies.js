// Iteration 1: All directors? - Get the array of all directors.
//Esto lo que hace es que recorre el array llamado Movies , aqui se llama arrayMovies pero porque jasmine se lo esta pasando como "movies" pero  en esta funcion flecha lo recibe como "arrayMovies"
//realmente recorre movies
const getAllDirectors = arrayMovies => {
    // este map lo que hace es crear una copia nueva del array movies es decir un nuevo array que se guarda en "getAllDirectors" pero solo guarda objetos con la propiedad "director"
    return arrayMovies.map(item => item.director)
}






// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//volvemos a recorrer el array movies (jasmine lo pasa como movies , pero aqui lo hace llamar arrayMovies),
const uniqueDirectors = arrayMovies => {
    //aqui lo que hace es obtener el array creado en "getAllDirectors funcion flecha" de objetos con todos los directores para usarlo en esta funcion
    const listDirectors = getAllDirectors(arrayMovies)
    //ahora recorre el array de directores de "listDirectors" , entonces lo que hace filter es crear un nuevo array pero solo con los directores duplicados
    //es decir , primero recorre un elemento // segungo comprueba si ese elemento ya existe dentro del array , si existe devuelve true y por lo tanto lo mete en el nuevo array.
    const result = listDirectors.filter((item, index) => (index === listDirectors.indexOf(item))) 
    return result
}
// aqui simplemente hace un console.log del array de directores filtrados , ejecuta la funcion flecha pasandole movies ( lo recibe como arrayMovies)
console.log(uniqueDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// aqui lo que hace es recorrer el array de movies  y comprobar  cuantas pelis tiene el spilberg
const howManyMovies = arrayMovies => {
//si el array esta vacio , devuelve un 0
    if (arrayMovies.length === 0) {
        return 0
    }
// aqui lo que hace es crear un nuevo array recorriendo cada elemento del arrya buscando el director spielberg y tambien su genero como "drama"
// si el elemento recorrido no es spielberg con su peli dramatica , el filter no lo mete en el nuevo arraay generado
    const arraySteven = arrayMovies.filter(item => item.director === 'Steven Spielberg' && item.genre.indexOf('Drama') >= 0)
// y finalmente devuelve el numero de  elementos que hay en el array filtrado de pelis drama de spielberg , es decir cuenta cuantos elementos hay en el array
    return arraySteven.length
}







// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// aqui lo que  hace es recorrer  movies y solo obtener un array con los rates que sean de dos decimales
const ratesAverage = arrayMovies => {
    // aqui comprueba que el array  movies no este vacio , si esta vacio , la funcion ratesAverage devuelve 0 directamente.
    if (arrayMovies.length === 0) {
        return 0
    }
//aqui lo que hace es crear un  nuevo array  de objetos pero solo con la propiedad "rate"  en cada objeto del array nuevo
    const rateMovies = arrayMovies.map(item => {
        // aqui lo que hace es que si la peli recorrida no tiene "rate propiead" , directamente devuelve 0 .
        if (!item.rate) {
            return 0;
        }
        // aqui lo que hace es que si tiene la propiedad rate , crea en el array un objeto con la propiedad "rate" , con el valor del rate de la peli recorrida
        return item.rate

    });
// hasta aqui tendremos un array de objetos solo con la propiedad "rate" de cada peli guardada en la funcion flecha "rateMovies"


// ahora lo que hace es recorrer ese array de objetos con los rates , guarda el valor recorrido en el "acumulator" y le suma el anterior y asi hasta sumar todos , esto devuelve una suma total
    let numerator = rateMovies.reduce((accumulator, currentValue) => accumulator + currentValue)

    //avgmovies ,  divide la suma total de todos los rates  entre la cantidad total de peliculas  que tienen rate (guardado en "rateMovies")
    let avgMovies = Number((numerator / rateMovies.length).toFixed(2))
    // una vez dividido entre el numero total de peliculas , le aplica el .toFixed 2 para redondear dos decimales
    return avgMovies;
    // aqui devuelve la media total de rates redondeado a 2
}



// Iteration 4: Drama movies - Get the average of Drama Movies
// aqui recorre el array de movies ( sin modificaciones) , primero obtiene solo un array de pelis de drama , y despues se lo pasa a la funcion ratesAverage para que calcule la media
const dramaMoviesRate = arrayMovies => {
// aqui recorremos movies (aka -> arrayMovies), y usamos filter para crear un nuevo array solo con las pelis que tengan en la propiedad "genre" el valor "Drama"
    const newArray = arrayMovies.filter(item => item.genre.indexOf('Drama') >= 0);
//basicamente en newArray buscamos si hay uno o mas elementos gracias al indexOf que se llame "Drama" , si existe uno entonces es true y el filter lo mete en el nuevo array
    
//ahora aqui simplemente como ya tenemos el array de dramas , ahora se lo pasamos a la funcion ratesAverage para que nos calcule la media de rates , el return del callback "ratesAverage" sera lo que devolverá y se guardara en "dramaMoviesRate"
    return ratesAverage(newArray)
}






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// ahora vamos a ordenar las pelis por fecha ascendente
const orderByYear = arrayMovies => {
    // recorremos el array movies (aka -> arraymovies), usamos sort para hacer la comparacion entre un elemento ("a" y el siguiente "b"),
    //en este caso usa slice para crear el array nuevo como copia , pero no hace falta si quetemos hacer copia sin slice usamos spread operator asi [...orderedArray]
    const orderedArray = arrayMovies.slice().sort((a, b) => {
        //comprobamos si el año de un elemento es igual al año del siguiente 
        if (a.year === b.year) {
            // si lo es , compraramos el titulo por orden alfabetico/alfanumerico 
            return a.title.localeCompare(b.title)
            // y guardamos en los elementos ordenador por titulo y no por year
        }
        // aqui simplemente si los años no son iguales , compara el año de un elemento con el del siguiente y entonces  los ordena.
        return a.year - b.year
    });

    // devuelve el array ordenado por año  y title si dos pelis tienen el mismo año 
    return orderedArray
}
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// volvemos a recorrer las pelis para  ordenarlas por titulo y devolver un array solo con las primeras 20 
const orderAlphabetically = arrayMovies => {
    //creamos un nuevo array  de pelis usando map , map solo guardara un objeto con la propiedad title y su valor
    const titleArray = arrayMovies.map(item => item.title)
    // ahora ordenamos el array de titulos , al ser letras se usa el localCompare para ordenarlas en orden alfabetico alfanumerico
    const alphaOrder = titleArray.sort((a, b) => a.localeCompare(b))
    //una vez obtenido el array de titlilos ordenador guardado en "alphaOrder" variable 
    //ahora hacemos que devuelva el array con el slice , desde el index 0 hasta el 20 del array
    return alphaOrder.slice(0,20)
    // y ya tenemos un array  de titulos ordenados por titulos y recortado hasta 20 elementos primeros
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arrayMovies => {
    // aqui hace una copia del array movies para no mutar el array original pero esta movida no  hace falta.. puedes usar lo siguiente con spread operator
    // const newArray = [...arrayMovies];
    const newArray = JSON.parse(JSON.stringify(arrayMovies));

// aqui lo que hace es recorrer el array de pelis (newArray)  y crear un nuevo array guardando un objeto con la propiedad duration modificada por cada peli recorrida.
    newArray.map(item => 
        //lo que hay dentro del parentesis  en el primer parentesis coge los numeros desde la posicion 0 hasta la posicion de la "h"
        // asi solo coge los numeros para hacer los calculos  y lo multiplica por 60  para tener los minutos de las horas y lo convierte en numero usando el metodo "Number"
        // luego el seggundo parentesis hace lo mismo , desde el spacio de horas y minutos  hasta la posicion donde se encuentra la palabra min , lo extrae y lo convierte en numero con Number porque previamente es un string .
        // una vez calculados y cconvertidos en tipo number los dos parentesis , los suma y ya tienes la suma total  de minutos , listo para gguardar en el objeto de nuevo array.
        item.duration = Number(item.duration.substring(0, item.duration.indexOf('h'))) * 60 + Number(item.duration.substring(item.duration.indexOf(' ')+1, item.duration.indexOf('min')))
    )

    //devuleve el array con las duraciones en minutos
    return newArray
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

//esta es una movida , pero te la explico 
//esta funcion flecha devuelve la peli mejor valorada

const bestYearAvg = arrayMovies => {
    // recorremos el array movies , si no tiene elementos es decir es vacio  la funcion bestYearAvg revuelve "null"
    if (arrayMovies.length === 0) {
        return null
    }
// una vez comprobado que no esta vacio  creamos un nuevo array con objetos que contienen solo la propiedad year y rate de cada peli recorrida.
    const newArray = arrayMovies.map(item => {
        return {
            'year': item.year,
            'rate': item.rate
        }
    })


    // aqui lo que hace es crear un objto que contiene una propiedad por cada año con el año como nombre y 
    //cada propiedad tiene un array con todos los rates de ese año pusheados
    const groupedArray = newArray.reduce((accumulator, currentValue) => {
// aqui crea la propiedad del año en el objeto y le guarda un array donde se pushearan todos los rates de cada año respectivo
        (accumulator[currentValue.year] = accumulator[currentValue.year] || [])  

        //aqui pushea el rate al array del año que tenga la peli recorrida
        accumulator[currentValue.year].push(currentValue.rate)

    
        return accumulator
// esto devuelve el acumulador que sera un objeto con arrays asi , ejemplo 
        //groupedArray = { 2010:[2,4,5,6],2020:[3,6,7]}
        // esta pava le llama "groupedArray" pero no contendrá un array sino un objeto , no se porque le llama asi la mongola
    }, {})



//una vez que ya tenemos un objeto  todos los años conteniendo un array con todos los rates de ese año ahora los recorremos 
// usamos un bucle de objetos 
    for (let key in groupedArray) {
        // aqui recorre cada año del objeto groupedArray
            let avg = groupedArray[key].reduce((accumulator, currentValue) => {
                // ahora lo que hace  es recorrer el array del año que se esta recorriendo  en el objeto y suma el total de sus rates
            let numerator = groupedArray[key].reduce((accumulator, currentValue) => accumulator + currentValue)
            // ahora lo que hace es el total de la suma de sus rates de cada año lo divide entre el numero de rates del array del año  y el resultdo lo dedondea a 2 decimales.
            let avgYear = Number((numerator / groupedArray[key].length).toFixed(2))
            // avgYear contiene la media  calculada de rates del año en cuestion
            return avgYear;
        })

        //aqui lo que hace es  buscar el año recoddido  en groupedArray y le sustituye el valor al año correspondiente por la media calculada arriba en "avg"
        groupedArray[key] = avg
    }

    
    // aqui lo que hace es recorrer el objeto groupedArray y ahora lo que esta haciendo es  un array que contiene un elemento por cada año contenido en "groupedArray" ,
    // cada objeto metido en el array contendra la propiedad year con el año e cuestion recorrido y su media de rate correspondiente

    // es decir result = [{year:2010,rate:2},{year:2020,rate:5}]
    const result = Object.keys(groupedArray).map(i => {
        return {
            'year': i,
            'rate': groupedArray[i]
        }
    })

    // ahora recorremos el array de "result" y lo ordenamos por rates 
    const biggerRate = result.sort((a, b) => {
        return b.rate - a.rate
    })

    // una vez ordenado el array nuevo (biggerRate), damos por hecho que el que esta en la primera posicion es el año que mejor rate tiene por eso imprimimos biggerRate[0].year y biggerRate[0].rate

    return `The best year was ${biggerRate[0].year} with an average rate of ${biggerRate[0].rate}`

}