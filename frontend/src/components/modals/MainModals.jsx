/* eslint-disable react/prop-types */
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";

export default function MainModals({ modalOpen, setModalOpen, children }) {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition show={modalOpen} as={Fragment} appear>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto text-center"
          initialFocus={cancelButtonRef}
          onClose={() => setModalOpen(false)}
        >
          <div className="min-h-screen px-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0"
            >
              <Dialog
                className="fixed inset-0 bg-black opacity-30"
                onClose={() => setModalOpen(false)}
              />
            </TransitionChild>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {children}
            </TransitionChild>
            <div className="absolute top-5 right-5">
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="inline-flex transitions justify-center px-4 py-2 text-base font-medium text-white bg-subMain rounded-full hover:bg-white hover:text-subMain"
              >
                <IoClose />
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
