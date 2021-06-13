if("serviceWorker" in navigator){
   navigator.serviceWorker.register("sw.js").then(registration =>{
       console.log("SW registered! :"+registration);

   }).catch( error => {
      console.log("SW Registration error :"+error);
   });
}
else{
    console.log("Application not supported")
}