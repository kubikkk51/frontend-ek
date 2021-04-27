btn.addEventListener("click",f_out);

   function f_out (){
       q = Number(x.value) + Number(y.value);
       z = q/Number(h.value);
       res.innerHTML = z;
   }
