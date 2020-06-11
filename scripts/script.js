//https://docs.google.com/spreadsheets/d/14-mFjnNsscxauPxJgMZxTFtrrc319h3akb1fS6P27HY/edit?usp=sharing


function init() {
    Papa.parse(`https://docs.google.com/spreadsheets/d/e/2PACX-1vTNik9F_6vPbPKCGneA6qMgExrkJhyl6MrzJhVj8PrK_T_EqqrFsgFJtPALhGkSw6mnX_nSuhknqZ0z/pub?output=csv`, {
    download: true,
    header: true,
    complete: function(results) {
      var data = results.data
      console.log(data)
    }
  })
}
window.addEventListener('DOMContentLoaded', init)