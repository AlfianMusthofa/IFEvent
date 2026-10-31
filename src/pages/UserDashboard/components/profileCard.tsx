import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  ChevronRight,
  CircleUserRound,
  Settings,
} from "lucide-react";
import { useGetMe } from "../hook/useGetMe";
import { useState } from "react";
import UpdateUser from "../UpdateUser";

const ProfileCard = () => {
  const { user } = useGetMe();
  const [modalEditProfile, setModalEditProfile] = useState(false);

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <a href="/" className="transition hover:text-gray-900">
          Home
        </a>
        <ChevronRight size={15} />
        <span>Profile</span>
        <ChevronRight size={15} />
        <span className="font-medium text-gray-800">
          {user?.name || "null"}
        </span>
      </div>

      {/* Page heading */}
      <section className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F0D65A] bg-[#FFF9D8] px-3 py-1.5 text-xs font-semibold text-gray-800">
            <span className="h-2 w-2 rounded-full bg-[#C6A000]" />
            Member Dashboard
          </span>
          <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
            My Profile
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Manage your profile and keep track of your learning journey on
            ElevateHub.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CalendarDays size={16} />
          <span>Personal activity overview</span>
        </div>
      </section>

      {/* Profile card */}
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#FFD600]/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-44 w-44 rounded-full bg-[#FFF5B8]/50 blur-3xl" />

        <div className="relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center">
          <div className="relative mx-auto shrink-0 md:mx-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#F2F3F5] text-gray-400 ring-4 ring-[#FFF5B8] sm:h-28 sm:w-28">
              <CircleUserRound size={82} strokeWidth={1.1} />
            </div>
            <button
              onClick={() => window.alert("Hubungkan upload foto ke backend.")}
              aria-label="Change profile photo"
              className="absolute -bottom-2 -right-2 rounded-xl border-2 border-white bg-[#FFD600] p-2 text-gray-900 shadow-sm transition hover:bg-yellow-400"
            >
              <Camera size={16} />
            </button>
          </div>

          <div className="min-w-0 flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {user?.name || "null"}
              </h2>
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                Active Member
              </span>
            </div>

            <p className="mt-2 break-all text-sm text-gray-500">
              {user?.email || "null"}
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <button
                onClick={() => setModalEditProfile(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFD600] px-5 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-yellow-400"
              >
                Edit Profile <ArrowUpRight size={16} />
              </button>

              <button
                onClick={() =>
                  window.alert("Hubungkan pengaturan akun ke backend.")
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <Settings size={16} />
                Account Settings
              </button>
            </div>
          </div>

          <div className="hidden shrink-0 border-l border-gray-100 pl-7 xl:block">
            <p className="text-xs text-gray-400">Membership</p>
            <p className="mt-2 text-lg font-bold">Elevate Member</p>
            <p className="mt-1 text-xs text-gray-500">
              Knowledge & Skill Community
            </p>
          </div>
        </div>
      </section>

      {/* MODALBOX UPDATE PROFILE */}

      {modalEditProfile && (
        <UpdateUser onClose={() => setModalEditProfile(false)} id={user?.id} />
      )}
    </>
  );
};

export default ProfileCard;
