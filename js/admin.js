function generate(){
const obj={id:Date.now(),title:title.value,description:desc.value,category:cat.value,tags:tags.value.split(',').map(x=>x.trim()).filter(Boolean),image:img.value,featured:featured.checked,dateAdded:new Date().toISOString().split('T')[0]};
output.textContent=JSON.stringify(obj,null,2);
}
function copyJson(){navigator.clipboard.writeText(output.textContent);}
