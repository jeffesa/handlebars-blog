import VMasker from 'vanilla-masker'

export class FormLead {
  constructor () {
    //listener submit
    this.submitButton = document.querySelectorAll('.form-lead button.button')[0]

    if (this.submitButton) {
      this.submitButton.addEventListener('click', this.submitModal.bind(this))
    }
    
    //listener phone
    this.inputPhone = document.querySelectorAll('.form-lead input[name="phone"]')[0]

    if (this.inputPhone) {
      this.inputPhone.addEventListener('keyup', this.phoneMask.bind(this))
    }
  }

  phoneMask (e) {
    this.mask = e.currentTarget.value.length <= 14 ? '(99) 9999-9999' : '(99) 99999-9999'
    this.vMasker = new VMasker(document.querySelector('input[name="phone"]')).maskPattern(this.mask)
  }

  validateEmail (email) {
    this.re = /\S+@\S+\.\S+/
    return this.re.test(email)
  }

  submitModal (e) {
    this.form = document.querySelectorAll('.form-lead .form input')
    this.hasError = true

    this.form[0].classList.remove('is-danger')
    this.form[1].classList.remove('is-danger')
    this.form[2].classList.remove('is-danger')
    this.form[3].classList.remove('is-danger')
    this.form[4].classList.remove('is-danger')

    if(this.form[0].value.length === 0) {
      this.form[0].classList.add('is-danger')
      this.hasError = true
      return false
    }
    if(this.form[1].value.length === 0) {
      this.form[1].classList.add('is-danger')
      this.hasError = true
      return false
    }
    if(!this.validateEmail(this.form[2].value)) {
      this.form[2].classList.add('is-danger')
      this.hasError = true
      return false
    }
    if(this.form[3].value.length < 14) {
      this.form[3].classList.add('is-danger')
      this.hasError = true
      return false
    }
    if(this.form[4].value.length === 0) {
      this.form[4].classList.add('is-danger')
      this.hasError = true
      return false
    }

    this.hasError = false
    const messageWrapper = document.getElementById('message-form')

    if (this.hasError) {
      messageWrapper.classList.remove('error')
      messageWrapper.classList.remove('success')
      messageWrapper.classList.add('error')
      messageWrapper.innerHTML = 'Necessário verificar os campos acima.'
    }
    else {
      //messageWrapper.classList.remove('error')
      //messageWrapper.classList.remove('success')
      //messageWrapper.innerHTML = ''

      const formData = new FormData()

      formData.append( 'action', 'add_lead_clean_energy' )
      formData.append( 'name', this.form[0].value )
      formData.append( 'city', this.form[1].value )
      formData.append( 'email', this.form[2].value )
      formData.append( 'phone', this.form[3].value )
      formData.append( 'company_name', this.form[4].value )

      fetch(window.ajax_url, {
        method: 'POST',
        credentials: 'same-origin',
        body: formData
      })
        .then((response) => {
          response
            .json()
            .then((result) => {
              
              if (result.success) {
                messageWrapper.classList.remove('error')
                messageWrapper.classList.add('success')
                messageWrapper.innerHTML = 'Formulário enviado com sucesso!'
              }
              else {
                messageWrapper.classList.remove('success')
                messageWrapper.classList.add('error')
                let message = result.message

                if (result.errors.length > 0) {
                  result.errors.map((e) => {
                    message += `<br/>${e.message}`
                  })
                }

                messageWrapper.innerHTML = message
              }
            })
        })
        .catch(() => {
          messageWrapper.classList.remove('error')
          messageWrapper.classList.remove('success')
          messageWrapper.classList.add('error')
          messageWrapper.innerHTML = 'Ocorreu um erro, por favor, tente novamente'
        })
    }

    //submit
  }
}
