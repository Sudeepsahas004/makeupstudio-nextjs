'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FormPage() {
  const [activeTab, setActiveTab] = useState('makeup');

  // ── Makeup booking form ──────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitBooking = async (data) => {
    try {
      await fetch(
        'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZjMDYzMjA0MzE1MjZhNTUzMCI_3D_pc/IjU3NjcwNTY5MDYzZTA0M2Q1MjZjNTUzMTUxMzYi_pc',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: data.fullName,
            phoneNumber: data.phone,
            email: data.email,
            eventType: data.eventType,
            eventDate: data.eventDate,
            location: data.location,
            message: data.message,
          }),
        }
      );
      alert('Booking Submitted Successfully!');
      reset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  // ── Academy enquiry form ─────────────────────────────────────────────────
  const {
    register: academyRegister,
    handleSubmit: academyHandleSubmit,
    reset: academyReset,
    formState: { errors: academyErrors },
  } = useForm();

  const submitAcademy = async (data) => {
    try {
      await fetch('YOUR_ACADEMY_PABBLY_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.fullName,
          phoneNumber: data.phone,
          email: data.email,
          qualification: data.qualification,
          course: data.course,
          batch: data.batch,
          message: data.message,
        }),
      });
      alert('Enquiry Submitted Successfully!');
      academyReset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  // ── Shared input classes ─────────────────────────────────────────────────
  const inputCls =
    'w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#D4AF37] focus:outline-none';

  return (
    <div className="min-h-screen bg-[#2B2929] py-10 px-4">
      <div className="max-w-4xl mx-auto mt-20">

        {/* Tabs */}
        <div className="flex justify-center relative z-10">
          <div className="flex">
            {['makeup', 'course'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 rounded-t-xl border transition-all duration-300 ${tab !== 'makeup' ? 'ml-2' : ''} ${
                  activeTab === tab
                    ? 'bg-[#1A1A1A] border-[#D4AF37] border-b-[#1A1A1A] text-[#D4AF37]'
                    : 'bg-[#242424] border-[#444] text-gray-400 hover:text-[#D4AF37]'
                }`}
              >
                {tab === 'makeup' ? 'Makeup Form' : 'Course Form'}
              </button>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="-mt-[1px] bg-[#1A1A1A] border border-[#D4AF37] rounded-b-xl rounded-tr-xl p-8">
          {activeTab === 'makeup' ? (
            <form onSubmit={handleSubmit(submitBooking)} className="grid md:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <input type="text" placeholder="Full Name"
                  {...register('fullName', {
                    required: 'Full Name is required',
                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Only letters and spaces are allowed' },
                    minLength: { value: 3, message: 'Minimum 3 characters' },
                  })}
                  className={inputCls}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <input type="tel" placeholder="Phone Number"
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid phone number' },
                  })}
                  className={inputCls}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input type="email" placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                  })}
                  className={inputCls}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Event Type */}
              <div>
                <select {...register('eventType', { required: 'Please select event' })} className={inputCls}>
                  <option value="">Select Event</option>
                  <option>Bridal Makeup</option>
                  <option>Reception Makeup</option>
                  <option>Party Makeup</option>
                </select>
                {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType.message}</p>}
              </div>

              {/* Event Date */}
              <div>
                <input type="date" {...register('eventDate', { required: 'Select event date' })} className={inputCls} />
                {errors.eventDate && <p className="text-red-500 text-sm">{errors.eventDate.message}</p>}
              </div>

              {/* Location */}
              <div>
                <input type="text" placeholder="Location"
                  {...register('location', { required: 'Location is required' })}
                  className={inputCls}
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <textarea placeholder="Message" rows="4"
                  {...register('message', { maxLength: { value: 500, message: 'Maximum 500 characters allowed' } })}
                  className={inputCls}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button type="submit" className="bg-[#D4AF37] hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg md:col-span-2 transition">
                Book Now
              </button>
            </form>
          ) : (
            <form onSubmit={academyHandleSubmit(submitAcademy)} className="grid md:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <input type="text" placeholder="Full Name"
                  {...academyRegister('fullName', {
                    required: 'Full Name is required',
                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Only letters and spaces are allowed' },
                    minLength: { value: 3, message: 'Minimum 3 characters' },
                  })}
                  className={inputCls}
                />
                {academyErrors.fullName && <p className="text-red-500 text-sm mt-1">{academyErrors.fullName.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <input type="tel" placeholder="Phone Number"
                  {...academyRegister('phone', {
                    required: 'Phone is required',
                    pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid phone number' },
                  })}
                  className={inputCls}
                />
                {academyErrors.phone && <p className="text-red-500 text-sm mt-1">{academyErrors.phone.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input type="email" placeholder="Email"
                  {...academyRegister('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                  })}
                  className={inputCls}
                />
                {academyErrors.email && <p className="text-red-500 text-sm mt-1">{academyErrors.email.message}</p>}
              </div>

              {/* Qualification */}
              <div>
                <input type="text" placeholder="Qualification"
                  {...academyRegister('qualification')}
                  className={inputCls}
                />
              </div>

              {/* Course */}
              <div>
                <select {...academyRegister('course', { required: 'Please select a course' })} className={inputCls}>
                  <option value="">Select Course</option>
                  <option>Basic Makeup</option>
                  <option>Advanced Makeup</option>
                  <option>Bridal Makeup Master Course</option>
                  <option>Self Makeup</option>
                </select>
                {academyErrors.course && <p className="text-red-500 text-sm mt-1">{academyErrors.course.message}</p>}
              </div>

              {/* Batch */}
              <div>
                <select {...academyRegister('batch', { required: 'Please select a batch' })} className={inputCls}>
                  <option value="">Preferred Batch</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Weekend</option>
                </select>
                {academyErrors.batch && <p className="text-red-500 text-sm mt-1">{academyErrors.batch.message}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <textarea placeholder="Message" rows="4"
                  {...academyRegister('message', { maxLength: { value: 500, message: 'Maximum 500 characters allowed' } })}
                  className={inputCls}
                />
                {academyErrors.message && <p className="text-red-500 text-sm mt-1">{academyErrors.message.message}</p>}
              </div>

              <button type="submit" className="bg-[#D4AF37] hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg md:col-span-2 transition">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
