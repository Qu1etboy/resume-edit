export default function Footer() {
  return (
    <footer className="mt-auto px-4 pb-4 pt-16 bg-gray-900 text-gray-100 sm:px-6 sm:pb-6 border-t">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Resume Edit
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                Resources
              </h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="https://flowbite.com" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://undraw.co/" className="hover:underline">
                    Undraw
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                Community
              </h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a
                    href="https://github.com/Qu1etboy/resume-edit-v2"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                Legal
              </h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Resume Edit
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
