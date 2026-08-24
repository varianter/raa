const navItems = [
  { label: "Oversikt" },
  { label: "Konsulentrollen" },
  { label: "Faglig utvikling" },
  { label: "I praksis" },
];

type HeaderProps = {
  activePage: string;
  onPageChange: (page: string) => void;
};

export function Header({ activePage, onPageChange }: HeaderProps) {
  return (
    <header>
      <svg width="91" height="68" viewBox="0 0 91 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2890_631)">
          <path d="M0 18.1777H17.7833C29.523 18.1777 36.9577 22.9869 36.9577 33.2996V33.5774C36.9577 41.1028 32.5819 45.0754 26.7475 46.8163L39.8781 68.0005H27.9292L16.0511 48.7703H11.1891V68.0005H0V18.1777ZM17.5064 41.1028C23.1348 41.1028 25.9811 38.7354 25.9811 33.9262V33.6484C25.9811 28.5615 22.9255 26.8207 17.5064 26.8207H11.1858V41.106H17.5064V41.1028Z" fill="#012C28" />
          <path d="M72.0925 17.9766H64.104H56.1155L40 67.7993H51.7397L64.104 27.175L76.4683 67.7993H88.2079L72.0925 17.9766Z" fill="#FF6426" />
          <path d="M64.1037 0C59.7279 0 56.1152 3.48494 56.1152 7.80317C56.1152 12.1214 59.7279 15.5385 64.1037 15.5385C68.4795 15.5385 72.0922 12.0536 72.0922 7.80317C72.0922 3.55277 68.4795 0 64.1037 0ZM64.1037 11.4981C62.0881 11.4981 60.7003 9.9639 60.7003 7.8064C60.7003 5.6489 62.0881 4.0437 64.1037 4.0437C66.1194 4.0437 67.5071 5.64567 67.5071 7.8064C67.5071 9.96713 66.0485 11.4981 64.1037 11.4981Z" fill="#012C28" />
        </g>
        <defs>
          <clipPath id="clip0_2890_631">
            <rect width="91" height="68" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-0 border-b border-black/10">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onPageChange(item.label)}
            className={`pb-3 text-sm font-semibold transition-colors ${
              activePage === item.label
                ? "border-b-2 border-[#333333] text-[#333333]"
                : "text-[#333333]/60 hover:text-[#333333]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
