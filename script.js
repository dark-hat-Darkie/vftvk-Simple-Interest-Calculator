function compute()
{
    const p = document.getElementById("principal").value;
    const y = document.getElementById("years").value;
    const r = document.getElementById("rate").value;

    const res = document.getElementById("result");

    const amount = p * (r / 100)

    const year = 2021 + parseInt(y);

    if(!p){
        res.innerHTML="Please enter Principal Amount!";
    } else {
        res.innerHTML=`if you deposit ${p} <br>
                    at an interest ${r}% <br>
                    You will receive an amount of ${amount} <br>
                    in the year ${year} <br>`
    }

    
    
}

function handleSlider(event) {
    const doc = document.getElementById("slider");
    const rate = document.getElementById("rate");
    doc.innerHTML=`${rate.value}%`
}
        