const switchers = [...document.querySelectorAll('.switcher')]
       
            switchers.forEach(item => {
                item.addEventListener('click', function () {
                    switchers.forEach(item => item.parentElement.classNameList.remove('is-active'))
                    this.parentElement.classNameList.add('is-active')
                })
            })
