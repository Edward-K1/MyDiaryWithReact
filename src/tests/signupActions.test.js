import registerUser from '../actions/signupActions';

const sampleUser = {
    firstname: "raphael",
    lastname: "kato",
    username: "rkat",
    email: "raphkat@gmail.com",
    password: "raphpass"
}

const sampleError = {
    message: "The selected username is not available",
    status: "failed"
}
it("tests signup success", () => {
    fetch.mockResponseOnce(JSON.stringify(sampleUser),{ status: 201 });
  
    registerUser().then(resp => {
    });
  });
  
  it("tests signup failure", () => {
      fetch.mockResponseOnce(JSON.stringify({ error: sampleError }),{ status: 400 });
    
      registerUser().then(resp => {
          expect(resp.error).toEqual(sampleError)
  
      });
    });