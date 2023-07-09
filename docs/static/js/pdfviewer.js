function getFile(file_path,file_name) {
	return "static/viewer.html?file=..%2Fservice%2F" + file_path + "%2F" + file_name;
};

function openFile(file_path,file_name,pageNum){
	window.open('pdfviewer.html?'+ file_path +'&' + file_name + '#page=' + pageNum);
}
