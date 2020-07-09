const initResize = () => {
    /**
     * Implement a function that handles JavaScript events. When the user clicks
     * and drags the `resize` node, its parent node `panel` should grow or shrink
     * vertically.
     */
    const resize = document.getElementById('resize');
    const panel = document.getElementById('panel')

    var startHeight, endPosition, startPosition, positionDifference

    resize.addEventListener('mousedown', initDrag)

    function initDrag (e) {
        startHeight = parseInt(document.defaultView.getComputedStyle(panel).height)
        startPosition = e.clientY
        document.documentElement.addEventListener('mousemove', dragElement)
        document.documentElement.addEventListener('mouseup', endDrag)
    }

    function dragElement (e) {
        endPosition = e.clientY
        panel.style.backgroundColor = 'rgb(' + endPosition + ', ' + Math.abs(positionDifference) + ', 0)'
        positionDifference = startPosition - endPosition
        panel.style.height = startHeight + positionDifference
    }

    function endDrag () {
        document.documentElement.removeEventListener('mousemove', dragElement)
        document.documentElement.removeEventListener('mouseup', endDrag)

    }
};

window.initResize = initResize;
export default initResize;
