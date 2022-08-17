import Navigation from "../../components/Nav/navigation";
import "../login/login.scss";
import facebook from "../../img/facebook.webp";
import { Link } from "react-router-dom";
import google from "../../img/google.webp";
import NavBottom from "../../components/NavBottom/navBottom";
function Register() {
  return (
    <>
      <Navigation text="Đăng ký" />
      <div className="login-page">
        <div className="form-lg">
          <div className="background-topic">
            <form onSubmit>
              <div className="formLogin">
                <div className="login">Đăng ký</div>
                <div className="overflow-hidden px-7">
                  <div className="box-border w-full h-10 overflow-hidden border rounded-sm border-solid flex items-center focus-within:border-sky-500 focus-within:shadow-lg">
                    <input
                      className="shrink-0 p-3 filter-none outline-none flex-1"
                      type="text"
                      name="username"
                      onChange
                      placeholder="Số Điện Thoại"
                    />
                  </div>
                  <button className="bg-orangesa-a text-white uppercase h-10 w-full rounded-sm mt-4">
                    Tiếp theo
                  </button>
                  <div className="flex my-3 justify-between"></div>
                  <div className="flex items-center mb-6 ">
                    <div className="h-a w-full  bg-gray-200"></div>
                    <span className="text-gray-300 text-sm uppercase ml-2 mr-2">
                      HOẶC
                    </span>
                    <div className="h-a w-full bg-gray-200"></div>
                  </div>
                  <div className="flex justify-between mb-6">
                    <div className="flex border justify-center p-2  pl-7 pr-7 text-sm border-gray-400 items-center rounded-sm">
                      <img className="h-6 mr-2" src={facebook} alt="Facebook" />
                      Facebook
                    </div>
                    <div className="flex items-center justify-center pr-10 pl-10 border p-2 text-sm border-gray-400 rounded-sm">
                      <img className="h-7 " src={google} alt="Google" />
                      Google
                    </div>
                  </div>
                  <div className="block text-center">
                    <div className="text-xs">
                      Bằng việc đăng kí, bạn đồng ý với Shopee về
                      <div>
                        <span className="text-orangesa-a">
                          Điều khoản dịch vu
                        </span>{" "}
                        <span>&</span>{" "}
                        <span className="text-orangesa-a">
                          Chính sách bảo mật
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pb-8 pt-7">
                    <span className="text-sm text-gray-400 mr-1 ">
                      Bạn đã có tài khoản?
                    </span>{" "}
                    <Link className="flex items-center" to="/login">
                      <span className="text-sm font-medium text-orangesa-a">
                        Đăng nhập
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavBottom />
    </>
  );
}
export default Register;
