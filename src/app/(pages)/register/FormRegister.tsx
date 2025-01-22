"use client";

import { authFirebase, dbFireBase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { push, ref, set } from "firebase/database";
import { useRouter } from "next/navigation";
interface User {
  name: string,
  email: string,
  avatar?: string
}

export const FormRegister = () => {
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if(fullName && email && password) {
      createUserWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if(user) {
            const dataUser: User = {
              name: fullName,
              email: email,
              avatar: user.photoURL || "",
            }
            set(ref(dbFireBase, 'users/' + user.uid), dataUser)
            .then(() => {
              router.push("/");
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-[15px] w-[500px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="fullName"
            className="font-[600] text-[14px] text-white"
          >
            Họ Tên <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Tran Tuan Hung"
            className="py-[14px] pl-[16px] pr-[32px] outline-none bg-white rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="email" className="font-[600] text-[14px] text-white">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="tuanhungvip12@gmail.com"
            className="py-[14px] pl-[16px] pr-[32px] outline-none bg-white rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="password"
            className="font-[600] text-[14px] text-white"
          >
            Mật Khẩu <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="py-[14px] pl-[16px] pr-[32px] outline-none bg-white rounded-[6px]"
          />
        </div>

        <button
          type="submit"
          className="btn bg-primary w-full py-[18px] px-[44px] font-[700] text-[16px] text-white rounded-[6px]"
        >
          Đăng Nhập
        </button>
      </form>
    </>
  );
};
