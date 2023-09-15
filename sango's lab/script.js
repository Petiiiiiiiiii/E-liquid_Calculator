function szamolas()
{
    let mennyiseg = document.getElementById("targetML").value;
    let erosseg = document.getElementById("targetStr").value;

    let flavour
    let nicotine
    let alaple

    flavour = mennyiseg * 0.15;
    nicotine = (erosseg * 0.06) * mennyiseg; //6mg 1mg = 6%
    alaple = mennyiseg - flavour - nicotine;

    document.getElementById("flavour").textContent = "Flavour : " + flavour + " ml";
    document.getElementById("nicotine").textContent = "Nicotine : " + nicotine + " ml";
    document.getElementById("alaple").textContent = "Alaple : " + alaple + " ml";
}