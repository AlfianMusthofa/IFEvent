import { Link } from "react-router-dom";
import {
  Store,
  Mail,
  Phone,
  Lock,
  Eye,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function OrganizerSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
          {/* Left */}
          <div className="hidden flex-col justify-between bg-gradient-to-br from-yellow-400 to-yellow-500 p-12 text-black lg:flex">
            <div>
              <div className="mb-10 flex items-center gap-3">
                <div className="rounded-full bg-black p-3">
                  <Store className="text-yellow-400" size={24} />
                </div>

                <h1 className="text-3xl font-bold">ElevateHub</h1>
              </div>

              <h2 className="text-5xl font-bold leading-tight">
                Grow your events,
                <br />
                build your community.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Join ElevateHub as an organizer and manage workshops, seminars,
                bootcamps, and conferences from one platform.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck size={26} />

                <div>
                  <h3 className="font-semibold">Verified Organizer</h3>

                  <p className="text-black/70">
                    Build trust with participants through a verified organizer
                    profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck size={26} />

                <div>
                  <h3 className="font-semibold">Event Management</h3>

                  <p className="text-black/70">
                    Easily create, edit, and monitor your events.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck size={26} />

                <div>
                  <h3 className="font-semibold">Audience Insights</h3>

                  <p className="text-black/70">
                    Track registrations and understand your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center p-10 lg:p-14">
            <div className="w-full max-w-md">
              <div className="mb-10 text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                  <Store className="text-yellow-500" size={36} />
                </div>

                <h2 className="text-3xl font-bold">Create Organizer Account</h2>

                <p className="mt-2 text-gray-500">
                  Start creating and managing amazing events.
                </p>
              </div>

              {/* Phone */}

              <div className="mb-5">
                <label className="mb-2 block font-medium">Phone Number</label>

                <div className="flex items-center rounded-xl border px-4">
                  <Phone size={20} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="081234567890"
                    className="h-14 w-full bg-transparent px-3 outline-none"
                  />
                </div>
              </div>

              {/* Email */}

              <div className="mb-5">
                <label className="mb-2 block font-medium">Email Address</label>

                <div className="flex items-center rounded-xl border px-4">
                  <Mail size={20} className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="hello@company.com"
                    className="h-14 w-full bg-transparent px-3 outline-none"
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <label className="mb-2 block font-medium">Password</label>

                <div className="flex items-center rounded-xl border px-4">
                  <Lock size={20} className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="h-14 w-full bg-transparent px-3 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye size={20} className="text-gray-400" />
                  </button>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Password must contain at least 8 characters.
                </p>
              </div>

              <button className="mt-8 h-14 w-full rounded-xl bg-yellow-400 font-semibold transition hover:bg-yellow-500">
                Create Organizer Account
              </button>

              <div className="my-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />

                <span className="text-sm text-gray-400">OR</span>

                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="rounded-2xl border border-yellow-100 bg-yellow-50 p-5">
                <h3 className="font-semibold">Looking to join an event?</h3>

                <p className="mt-2 text-sm text-gray-600">
                  Create a participant account to discover and register for
                  events on ElevateHub.
                </p>

                <Link
                  to="/register"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-yellow-600 hover:text-yellow-700"
                >
                  Sign up as User
                  <ArrowRight size={18} />
                </Link>
              </div>

              <p className="mt-8 text-center text-sm text-gray-500">
                Already have an organizer account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-yellow-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
