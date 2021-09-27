
// this file contains all the actions that preform async 
// requests to the server they return a function as we are using Thunk



export function getMovies(){
    let apiKey='d141f7eed7f64c4556747cc42ce183f9'
    let type=['top_rated','popular','upcoming']
    let response, responseData
    return async(dispatch,getState)=>{
        let movieObj={}
        for(let i=0;i<type.length;i++){
            let query=type[i]
            try{
                let url=`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}&language=en-US&page=1`
                response = await fetch(url)
                if(response.ok){
                    responseData=await response.json()
                    
                }
                console.log(responseData)
            }
            catch(e){
                console.log(`error: ${e}`)
            }
            
            movieObj={
                ...movieObj,
                [query]:responseData
            }
        }
        //console.log('movie string' + JSON.stringify(movieObj,undefined,4))
        dispatch({
            type:'FETCH_MOVIES',
            payload:movieObj
        })
    }
}


export function getTv(){
    let apiKey='d141f7eed7f64c4556747cc42ce183f9'
    let type=['top_rated','popular','on_the_air']
    let response, responseData
    return async(dispatch,getState)=>{
        let tvObj={}
        for(let i=0;i<type.length;i++){
            let query=type[i]
            try{
                let url=`https://api.themoviedb.org/3/tv/${query}?api_key=${apiKey}&language=en-US&page=1`
                response = await fetch(url)
                if(response.ok){
                    responseData=await response.json()
                    
                }
                console.log(responseData)
            }
            catch(e){
                console.log(`error: ${e}`)
            }
            
            tvObj={
                ...tvObj,
                [query]:responseData
            }
        }
        //console.log('movie string' + JSON.stringify(movieObj,undefined,4))
        dispatch({
            type:'FETCH_TV',
            payload:tvObj
        })
    }
}

export function getConfig(){
    let apiKey='d141f7eed7f64c4556747cc42ce183f9'
    
    let response, responseData
    return async(dispatch,getState)=>{
        try{
            let url=`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`
            response = await fetch(url)
            if(response.ok){
                responseData=await response.json()
                
            }
            console.log(responseData)
        }
        catch(e){
            console.log(`error: ${e}`)
        }
        
        let configObj={
            ...responseData
        }
        console.log(configObj)
        dispatch({
            type:'FETCH_CONFIG',
            payload:configObj
        })
    }
}

export function getDetails(cat,id){
    let apiKey='d141f7eed7f64c4556747cc42ce183f9'
    
    let response, responseData
    return async(dispatch,getState)=>{
        try{
            let url=`https://api.themoviedb.org/3/${cat}/${id}?api_key=${apiKey}&language=en-US`
            response = await fetch(url)
            if(response.ok){
                responseData=await response.json()
                
            }
            console.log(responseData)
        }
        catch(e){
            console.log(`error: ${e}`)
        }
        
        let configObj={
            ...responseData
        }
        console.log(configObj)
        if(cat==='tv'){
            dispatch({
                type:'TV_SHOW_DETAILS',
                payload:configObj
            })
        }
        if(cat==='movie'){
            dispatch({
                type:'MOVIE_DETAILS',
                payload:configObj
            })
        }
        
    }
}


export function getSearch(query){   
    let apiKey='d141f7eed7f64c4556747cc42ce183f9'
    let encodedQuery=encodeURI(query)
    let response, responseData
    return async(dispatch,getState)=>{
        try{
            let url=`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${encodedQuery}&page=1&include_adult=false`
            response = await fetch(url)
            if(response.ok){
                responseData=await response.json()
                
            }
            console.log(responseData)
        }
        catch(e){
            console.log(`error: ${e}`)
        }
        
        let configObj={
            ...responseData
        }
        console.log(configObj)
        
        dispatch({
            type:'SEARCH',
            payload:configObj
        })
        
    }
}

