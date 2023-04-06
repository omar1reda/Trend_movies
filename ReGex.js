
export class ReGex 
{

  constructor()
  {
   
   this.variableReGex()
  
  }

  variableReGex()
  {
    $('.NameInput').keyup(this.testReGexName.bind(this))
    $('.EmailInput').keyup(this.testReGexEmail.bind(this))
    $('.PhoneInput').keyup(this.testReGexPhone.bind(this))
    $('.AgeInput').keyup(this.testReGexAge.bind(this))
    $('.PasswordInput').keyup(this.testReGexPassword.bind(this))
    $('.RePasswordInput').keyup(this.testGexRePassword.bind(this))

    document.querySelector('.butTest').disabled = true
    
    $('.alertName').slideUp(200)
    $('.alertEmail').slideUp(200)
    $('.alertPhone').slideUp(200)
    $('.alertAge').slideUp(200)
    $('.alertPassword').slideUp(200)
    $('.alertRePassword').slideUp(200)

  }

  testReGexName()
  { 
     let ReGexName = /^[A-Z a-z]{2,}$/
    if(ReGexName.test($('.NameInput').val()))
    {
      $('.alertName').slideUp(200)
      this.TestBotton()
      
    }
    else
    {
      $('.alertName').slideDown(200)
      document.querySelector('.butTest').disabled = true
    }
    
  }

  testReGexEmail()
  {
    
    let ReGexEmail = /^[A-Z a-z 0-9]+(@)[A-Z a-z]{2,6}(.)[a-z A-Z]{2,3}$/
    if(ReGexEmail.test($('.EmailInput').val()))
    {
      $('.alertEmail').slideUp(200)
     
      this.TestBotton()
    }
    else
    {
      $('.alertEmail').slideDown(200)
      document.querySelector('.butTest').disabled = true
    }
  }

  testReGexPhone()
  {
    let ReGexPhone = /^[0-9]{9,11}[0-9]$/
    if(ReGexPhone.test($('.PhoneInput').val()))
    {
      $('.alertPhone').slideUp(200)
      this.TestBotton()
    }
    else
    {
      $('.alertPhone').slideDown(200)
      document.querySelector('.butTest').disabled = true
    }

  }

  testReGexAge()
  {
    let ReGexAge = /^[1-9]{1}[0-9]{1}$/

    if(ReGexAge.test($('.AgeInput').val()))
    {
      $('.alertAge').slideUp(200)
      this.TestBotton()
    }
    else
    {
      $('.alertAge').slideDown(200)
      document.querySelector('.butTest').disabled = true
    }

  }

  testReGexPassword()
  {
    let ReGexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


    if($('.RePasswordInput').val() == '')
    {
      if(ReGexPass.test($('.PasswordInput').val()))
      {
        $('.alertPassword').slideUp(200)
        this.TestBotton()
      }
      else
      {
        $('.alertPassword').slideDown(200)
        document.querySelector('.butTest').disabled = true
      }

    }
    else
    {
      if(ReGexPass.test($('.PasswordInput').val()) && $('.RePasswordInput').val() ==  $('.PasswordInput').val())
      {
        $('.alertPassword').slideUp(200)
        this.TestBotton()
      }
      else
      {
        $('.alertPassword').slideDown(200)
        document.querySelector('.butTest').disabled = true
      }

    }

  }

  testGexRePassword()
  {
    let ReGexPass2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if($('.PasswordInput').val() == '')
    {
        if(ReGexPass2.test($('.RePasswordInput').val()))
        {
          $('.alertRePassword').slideUp(200)
         
          this.TestBotton()
        }
        else
        {
          
          $('.alertRePassword').slideDown(200)
          document.querySelector('.butTest').disabled = true
        }
    }
    else
    {
        if(ReGexPass2.test($('.RePasswordInput').val()) && $('.RePasswordInput').val() ==  $('.PasswordInput').val())
        {
          $('.alertRePassword').slideUp(200)
          this.TestBotton()
        }
        else
        {
          $('.alertRePassword').slideDown(200)
          document.querySelector('.butTest').disabled = true
        }
    }



  }

  TestBotton()
  {
    if(  $('.NameInput').val()!=''&& $('.EmailInput').val()!='' && $('.PhoneInput').val()!='' && $('.AgeInput').val()!='' &&  $('.PasswordInput').val()!='' && $('.RePasswordInput').val()!='' )
    {
      document.querySelector('.butTest').disabled = false
    }
  }

}