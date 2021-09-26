function copyAddress(url) {
    const cInput = document.createElement('input');
    cInput.setAttribute('id', 'copyLayer');
    cInput.value = url;
    document.body.appendChild(cInput);
    cInput.select();
    document.execCommand('Copy');

    const thisNode = document.getElementById('copyLayer');
    thisNode.parentNode.removeChild(thisNode);
}
function copyLft(obj) {
    let str = $(obj).data("address")
    copyAddress(str)
}
