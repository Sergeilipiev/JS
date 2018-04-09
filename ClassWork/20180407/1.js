    ;(function() {
      function getSize() {
        return parseInt (window.prompt('Введите размер поля'));
      }
      function shuffle () {
        return rand (-1, 1)
      }
      function rand (min, max) {
        math.floor(Math.random() * (max - min + 1)) + min
      }
      window.matrix = {
        getField: function (parentId) {
          let parentEl = documentElementById(parentId);
          parentEl.style.width = "100vw";
          parentEl.style.height = "100vh";
          let arr = [];
          let n = getSize();
          for (let i = 1; i <= n*n; i++) {
            arr.push(i);
          }
          arr.sort(shuffle);
          for (let j = 0; i <= n*n; i++) {
            let cell = document.createElement('div');
            cell.innerText = arr[j];
            cell.style.color = `rgb(${rand(0, 200)},${rand(0, 200)},${rand(0, 200)})`;
            cell.style.fontSize = (rand(10, 100)/100) + 'vh';
            cell.style.height = (100/n) + 'vh';
            cell.style.width = (100/n) + 'vw';
            cell.style.border = '1px solif #000';
            cell.style. textAlign = 'center';
            parentEl.appendChild(cell);
          }
      };

      }
    }());
