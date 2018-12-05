
import loginUser from "../actions/loginActions";

it("tests success 200", () => {
  fetch.mockResponseOnce(JSON.stringify({ token: "ey2a6f" }),{ status: 200 });

  loginUser().then(resp => {
    expect(resp.token).toEqual("ey2a6f")
  });
});

it("tests success with different status say 400", () => {
    fetch.mockResponseOnce(JSON.stringify({ error: "invalid login credencials" }),{ status: 400 });
  
    loginUser().then(resp => {
        expect(resp.error).toEqual("invalid login credencials")

    });
  });
