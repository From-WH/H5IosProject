export  default {
  getToken:()=>{
    let token = (sessionStorage.getItem('iosWebToke') || '');
    if(token!=null){
      return {
        token:token,
      }
    }else{
      return  {
        token:'',
      }
    }
  }
}
