
<!-- Section 1 -->
<section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">

        <nav class="relative z-50 h-24 select-none" x-data="{ showMenu: false }">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
                <div class="flex items-center justify-start w-1/4 h-full pr-4">
                    <a href="#_" class="inline-block py-4 md:py-0">
                        <span class="p-1 text-xl font-black leading-none text-gray-900">tails.</span>
                    </a>
                </div>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                        <a href="#_" class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span class="text-indigo-600">.</span></a>
                        <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="#_" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Features</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Blog</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Contact</a>
                            <a href="#_" class="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
                                <svg class="inline w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                            <a href="#" class="w-full px-3 py-2 mr-0 text-gray-700 md:mr-2 lg:mr-3 md:w-auto">Sign In</a>
                            <a href="#_" class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">Sign Up</a>
                        </div>
                    </div>
                </div>
                <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                    <svg class="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    <svg class="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak=""><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
        </nav>

        <!-- Main Hero Content -->
        <div class="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
            <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block">Start Crafting Your</span> <span class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">Next Great Idea</span></h1>
            <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Simplifying the creation of landing pages, blog pages, application pages and so much more!</div>
            <div class="flex flex-col items-center mt-12 text-center">
                <span class="relative inline-flex w-full md:w-auto">
                    <a href="#_" type="button" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Purchase Now
                    </a>
                    <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $15/mo</span>
                </span>
                <a href="#_" class="mt-3 text-sm text-indigo-500">Learn More</a>
            </div>
        </div>
        <!-- End Main Hero Content -->

    </div>
</section>

<!-- Section 2 -->
<section class="py-12 sm:py-16 bg-white">
    <div class="max-w-7xl px-10 mx-auto sm:text-center">
        <p class="text-blue-500 font-medium uppercase">Our Application Integrations</p>
        <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Connect with Your Favorite Apps.</h2>
        <p class="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">We've built integrations with some of your favorite services.<br class="lg:hidden hidden sm:block"> Check'em out below 👇</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="w-16 h-auto" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M159.999 128.056a76.55 76.55 0 0 1-4.915 27.024 76.745 76.745 0 0 1-27.032 4.923h-.108c-9.508-.012-18.618-1.75-27.024-4.919A76.557 76.557 0 0 1 96 128.056v-.112a76.598 76.598 0 0 1 4.91-27.02A76.492 76.492 0 0 1 127.945 96h.108a76.475 76.475 0 0 1 27.032 4.923 76.51 76.51 0 0 1 4.915 27.02v.112zm94.223-21.389h-74.716l52.829-52.833a128.518 128.518 0 0 0-13.828-16.349v-.004a129 129 0 0 0-16.345-13.816l-52.833 52.833V1.782A128.606 128.606 0 0 0 128.064 0h-.132c-7.248.004-14.347.62-21.265 1.782v74.716L53.834 23.665A127.82 127.82 0 0 0 37.497 37.49l-.028.02A128.803 128.803 0 0 0 23.66 53.834l52.837 52.833H1.782S0 120.7 0 127.956v.088c0 7.256.615 14.367 1.782 21.289h74.716l-52.837 52.833a128.91 128.91 0 0 0 30.173 30.173l52.833-52.837v74.72a129.3 129.3 0 0 0 21.24 1.778h.181a129.15 129.15 0 0 0 21.24-1.778v-74.72l52.838 52.837a128.994 128.994 0 0 0 16.341-13.82l.012-.012a129.245 129.245 0 0 0 13.816-16.341l-52.837-52.833h74.724c1.163-6.91 1.77-14 1.778-21.24v-.186c-.008-7.24-.615-14.33-1.778-21.24z" fill="#FF4A00"></path></svg>
                <p class="font-bold mt-4">Zapier</p>
                <p class="mt-2 text-sm text-gray-500">Connect to 1,000+ apps</p>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="w-16 h-auto" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"></path><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"></path><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"></path><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"></path></g></svg>
                <p class="font-bold mt-4">Slack</p>
                <p class="mt-2 text-sm text-gray-500">Messaging Platform</p>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 262" fill="none"><path d="M192.277 86.567V55.5a23.953 23.953 0 0 0 13.815-21.594v-.727a23.998 23.998 0 0 0-23.934-23.934h-.726a24 24 0 0 0-23.935 23.934v.727A23.949 23.949 0 0 0 171.312 55.5v31.132a67.887 67.887 0 0 0-32.278 14.202l-85.44-66.541A27.259 27.259 0 1 0 40.828 50.9l84.004 65.395a68.079 68.079 0 0 0 1.049 76.757l-25.564 25.565a21.93 21.93 0 0 0-6.343-1.033 22.187 22.187 0 0 0-20.502 13.699 22.19 22.19 0 1 0 42.693 8.492 21.858 21.858 0 0 0-1.033-6.343l25.29-25.29a68.198 68.198 0 0 0 58.778 11.746 68.196 68.196 0 0 0 45.342-39.203 68.198 68.198 0 0 0-3.13-59.858 68.188 68.188 0 0 0-49.183-34.26h.048Zm-10.523 102.354a34.988 34.988 0 0 1-34.225-41.871 34.99 34.99 0 0 1 69.295 6.898 34.99 34.99 0 0 1-34.989 34.989" fill="#FF7A59"></path></svg>
                <p class="font-bold mt-4">Hubspot</p>
                <p class="mt-2 text-sm text-gray-500">Customer Relations</p>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 190" fill="none"><path d="M115.482 49.956V189.13H0L115.482 49.956ZM115.482 0A57.587 57.587 0 0 1 98.57 40.756a57.793 57.793 0 0 1-40.83 16.882c-15.313 0-30-6.073-40.828-16.882A57.586 57.586 0 0 1 0 0h115.482ZM134.507 189.13a57.586 57.586 0 0 1 16.912-40.757 57.792 57.792 0 0 1 40.829-16.881c15.313 0 30 6.072 40.828 16.881a57.586 57.586 0 0 1 16.912 40.757H134.507ZM134.507 139.174V0h115.494L134.507 139.174Z" fill="#03363D"></path></svg>
                <p class="font-bold mt-4">Zendesk</p>
                <p class="mt-2 text-sm text-gray-500">Customer Messaging</p>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 215" fill="none"><path d="M0 162.02V69.962c0-3.137 3.137-5.378 6.095-4.302l106.849 41.592c3.047 1.165 3.316 5.378.448 6.812L6.633 166.144C3.585 167.668 0 165.427 0 162.02Z" fill="#F82B60"></path><path d="M123.611 94.792 16.942 51.766c-3.406-1.434-3.406-6.275 0-7.709L119.31 1.479c4.661-1.972 9.95-1.972 14.7 0l102.367 42.578c3.406 1.434 3.406 6.275 0 7.709L130.155 94.792a8.3 8.3 0 0 1-6.544 0Z" fill="#FCB400"></path><path d="m139.835 214.369 107.386-41.323c1.703-.628 2.778-2.241 2.778-4.034V69.424c0-3.047-2.958-5.11-5.736-4.033l-107.387 41.323c-1.703.627-2.778 2.241-2.778 4.033v99.588c0 3.048 2.958 5.109 5.737 4.034Z" fill="#18BFFF"></path><path d="M112.944 107.252 6.095 65.66c-1.434-.538-2.868-.269-4.033.448l75.295 65.525 36.035-17.569c2.868-1.523 2.599-5.736-.448-6.812Z" fill="#BA2048"></path></svg>
                <p class="font-bold mt-4">Airtable</p>
                <p class="mt-2 text-sm text-gray-500">Data Management</p>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" fill="none"><path d="m146.101 236.335-42.529-41.47 91.337-93.269 44.032 43.155-92.84 91.584Z" fill="#8AB4F8"></path><path d="M146.283 52.982 103.907 9.717l-92.659 91.779c-11.944 11.944-11.944 31.308 0 43.265l91.267 91.863 43.156-40.37-69.536-73.125 70.148-70.147Z" fill="#4285F4"></path><path d="M238.329 102.209 146.45 10.332c-11.958-11.957-31.35-11.957-43.308 0-11.959 11.958-11.959 31.35 0 43.308l91.879 91.876c11.958 11.958 31.35 11.958 43.308 0 11.959-11.958 11.959-31.349 0-43.307Z" fill="#8AB4F8"></path><path d="M124.092 246.372c16.53 0 29.93-13.4 29.93-29.93 0-16.529-13.4-29.929-29.93-29.929-16.531 0-29.93 13.4-29.93 29.929 0 16.53 13.399 29.93 29.93 29.93Z" fill="#246FDB"></path></svg>
                <p class="font-bold mt-4">Google Tag Manager</p>
                <p class="mt-2 text-sm text-gray-500">Web Tag Manager</p>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path d="M362.9 243.5c3.1-.4 6.2-.4 9.3 0 1.7-3.8 2-10.5.5-17.6-2.2-10.7-5.3-17.2-11.5-16.2s-6.5 8.8-4.2 19.5c1.1 5.9 3.4 11.1 5.9 14.3zm-53.7 8.5c4.5 2 7.2 3.3 8.3 2.1 1.9-1.9-3.5-9.4-12.1-13.1-10.2-4.2-21.8-2.8-30.7 3.7-3 2.2-5.8 5.2-5.4 7.1.9 3.7 10-2.7 22.7-3.5 6.9-.5 12.7 1.7 17.2 3.7zm-9 5.1c-9.1 1.4-15 6.5-13.5 10.1.9.3 1.2.8 5.2-.8 6-2.3 12.4-2.9 18.8-2 2.9.3 4.3.5 5-.5 1.3-2.1-5.8-7.9-15.5-6.8zm54.2 17.2c3.4-6.9-10.9-14-14.3-7-3.4 6.9 11 13.9 14.3 7zm15.7-20.5c-7.7-.1-8 15.8-.3 16 7.8 0 8.1-15.9.3-16zm-219.2 79c-1.3.3-6 1.5-8.5-2.4-5.2-8 11.1-20.4 3-35.9-9.1-17.5-27.9-13.6-35.1-5.6-8.7 9.6-8.7 23.6-5 24.1 4.3.6 4.1-6.5 7.4-11.7 3.9-6 11.8-7.7 17.8-3.8 0 0 .1 0 .1.1 11.6 7.6 1.4 17.8 2.3 28.7 1.4 16.7 18.5 16.4 21.6 9 .4-.7.3-1.7-.2-2.3 0 1.1.6-1.1-3.4-.2zm300.4-17.1c-3.4-11.8-2.6-9.2-6.8-20.6 2.5-3.7 15.3-24.1-3.1-43.3-10.4-10.9-34-16.6-41.2-18.6-1.5-11.4 4.7-58.8-21.6-83.2 20.8-21.6 33.8-45.4 33.8-65.8-.1-39.2-48.3-51.1-107.7-26.5L292.1 63c-.1-.1-22.8-22.3-23.1-22.6-67.6-59-279.4 176.3-211.7 233.5l14.8 12.5c-4 10.7-5.4 22.2-4.1 33.6 3.4 33.5 36.1 60.6 67.7 60.5 57.9 133.4 268.5 133.6 323 3 1.7-4.5 9.1-24.7 9.1-42.5s-10.1-25.3-16.5-25.3zM134.5 364c-22.9-.6-47.6-21.2-50-45.6-6.2-61.4 74.4-75.4 84.2-12.4 4.6 29.7-4.7 58.6-34.2 58zM116 249.5c-15.2 3-28.6 11.6-36.8 23.5-4.9-4.1-14-12-15.6-15-13-24.9 14.3-73.2 33.4-100.4C144.2 90.2 218.1 39.2 252.4 48.4c5.6 1.6 24 22.9 24 22.9s-34.2 19-65.9 45.5c-42.9 33-75.2 80.8-94.5 132.7zm239.4 101.4s-35.8 5.3-69.7-7.1c6.2-20.2 27.1 6.1 96.6-13.8 15.3-4.4 35.4-13 51.1-25.4 3.4 7.8 5.8 16 7.1 24.3 3.7-.7 14.3-.5 11.5 18.1-3.3 19.9-11.8 36.1-26 51-8.9 9.6-19.5 17.6-31.2 23.4-6.5 3.4-13.4 6.3-20.4 8.6-53.6 17.5-108.5-1.7-126.3-43.1-1.4-3.2-2.6-6.4-3.6-9.8-7.5-27.3-1.1-60 18.9-80.6 1.2-1.3 2.5-2.9 2.5-4.8-.2-1.7-.8-3.3-1.9-4.6-7-10.2-31.3-27.5-26.4-61 3.5-24.1 24.5-41 44.2-40l5 .3c8.5.5 15.9 1.6 22.9 1.9 11.7.5 22.3-1.2 34.7-11.6 4.2-3.5 7.6-6.6 13.3-7.5 4.7-1.2 9.6-.3 13.6 2.2 10 6.7 11.4 22.8 11.9 34.6.3 6.7 1.1 23.1 1.4 27.7.6 10.7 3.4 12.2 9.1 14 3.2 1.1 6.2 1.8 10.5 3.1 13.2 3.7 21 7.5 26.1 12.3 2.6 2.5 4.2 5.8 4.8 9.3 1.6 11.4-8.8 25.5-36.4 38.2-46.8 21.7-93.9 14.5-100.7 13.7-20.2-2.7-31.7 23.4-19.6 41.2 22.7 33.5 122.7 20 151.7-21.4.7-1 .1-1.6-.7-1-41.9 28.6-97.3 38.3-128.8 26.1-4.8-1.9-14.8-6.5-16-16.7 43.7 13.5 71.2.7 71.2.7s2.2-2.6-.4-2.3zM203.2 157.3c16.8-19.4 37.4-36.3 56-45.7.3-.2.8-.1 1 .3.1.2.1.5 0 .7-1.5 2.7-4.3 8.4-5.2 12.7-.1.4.2.8.6.9.2.1.4 0 .6-.1 11.5-7.8 31.6-16.3 49.1-17.3.4 0 .8.3.8.7 0 .3-.1.5-.3.7-2.9 2.2-5.5 4.8-7.7 7.8-.2.3-.2.8.2 1 .1.1.3.1.4.1 12.3.1 29.7 4.4 41.1 10.8.8.4.2 1.9-.6 1.7-69.7-16-123.4 18.6-134.8 26.9-.4.2-.8.1-1.1-.2-.3-.4-.3-.8-.1-1z"></path></svg>
                <p class="font-bold mt-4">Mailchimp</p>
                <p class="mt2 text-sm text-gray-500">Email Marketing</p>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg class="h-16 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 343" fill="none"><path d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z" fill="#34A853"></path><path d="M250.001 85.16h-86.182V0l86.182 85.16Z" fill="#188038"></path><path d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z" fill="#fff"></path></svg>
                <p class="font-bold mt-4">Google Sheets</p>
                <p class="mt-2 text-sm text-gray-500">Spreadsheet</p>
            </div>
        </div>
        <a href="#_" class="px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500">View All Integrations</a>
    </div>
</section>

<!-- Section 3 -->
<section class="relative w-full bg-white">
    <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
    <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">

        <h1 class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">The Project Blog</a></h1>
        <p class="text-lg font-medium text-gray-500 sm:text-2xl">Designs and layouts to help you with your app.</p>
        <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg')">
                </a>
                <div class="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                    <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Resources</a>
                    <h2 class="mb-5 text-5xl font-bold"><a href="#_">Refreshing Designs</a></h2>
                    <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">Quench satisfying designs to help you stir up emotion and tell a story.</p>

                </div>
            </div>

            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/orange.jpg')">
                </a>
                <div class="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                    <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Lifestyle</a>
                    <h2 class="mb-5 text-5xl font-bold"><a href="#_">Healthier Lifestyle</a></h2>
                    <p class="mb-2 text-lg font-normal text-blue-100 opacity-100">Living a healthier lifestyle will help with your productivity and your mind-set.</p>

                </div>
            </div>

            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/gbc.jpg')"></a>
                <div class="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                    <a href="#_" class="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Entertainment</a>
                    <h2 class="mb-5 text-5xl font-bold"><a href="#_">Gaming Evolution</a></h2>
                    <p class="mb-2 text-lg font-normal opacity-100 text-yellow-50">Learn about the evolution of gaming and how it started a revolution.</p>

                </div>
            </div>

            <div class="grid grid-cols-12 col-span-12 gap-7">
                <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                        <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workstation.jpg">
                    </a>
                    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div class="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Inspiration</span>
                        </div>
                        <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Best Workstations of the Year</a></h2>
                        <p class="mt-2 text-sm text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                    </div>
                </div>

                <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                        <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/snacks.jpg">
                    </a>
                    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div class="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Food</span>
                        </div>
                        <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Eating for Productivity</a></h2>
                        <p class="mt-2 text-sm text-gray-500">Learn how to be more disciplined in your diet and how you can eat to maximize productivity.</p>
                    </div>
                </div>

                <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                        <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/book-design.jpg">
                    </a>
                    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div class="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Resources</span>
                        </div>
                        <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">A Design Mind-set</a></h2>
                        <p class="mt-2 text-sm text-gray-500">What does it mean to have a design mind-set? Learn how to improve your eye for design.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Section 4 -->
<section class="w-full bg-white">

    <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                    <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                        <div class="relative">
                            <p class="mb-2 font-medium text-gray-700 uppercase">Work smarter</p>
                            <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">Features to help you work smarter</h2>
                        </div>
                        <p class="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application.</p>
                        <a href="#_" class="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                    <h4 class="w-full text-3xl font-bold">Signup</h4>
                    <p class="text-lg text-gray-500">or, if you have an account you can <a href="#_" class="text-blue-600 underline">sign in</a></p>
                    <div class="relative w-full mt-10 space-y-8">
                        <div class="relative">
                            <label class="font-medium text-gray-900">Name</label>
                            <input type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">Email</label>
                            <input type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">Password</label>
                            <input type="password" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Password">
                        </div>
                        <div class="relative">
                            <a href="#_" class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Create Account</a>
                            <a href="#_" class="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Sign up with Google</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<!-- Section 5 -->
<section class="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
    <div class="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div class="flex flex-col items-center lg:flex-row">
            <div class="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <p class="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">Our customers love our product</p>
                <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Testimonials</h2>
                <p class="my-6 text-lg text-gray-600">Don't just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
                <a href="#_" class="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">View Case Studies</a>
            </div>
            <div class="w-full lg:w-1/2">
                <blockquote class="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
                    <div class="flex flex-col pr-8">
                        <div class="relative pl-12">
                            <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Awesome product! And the customer service is exceptionally well.</p>
                        </div>

                        <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            Jane Cooper
                            <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                        </h3>
                    </div>
                    <img class="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                </blockquote>
                <blockquote class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                    <div class="flex flex-col pr-10">
                        <div class="relative pl-12">
                            <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can't express enough, how amazing this service has been for my company.</p>
                        </div>
                        <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            John Doe
                            <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                </blockquote>
                <blockquote class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                    <div class="flex flex-col pr-10">
                        <div class="relative pl-12">
                            <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can't express enough, how amazing this service has been for my company.</p>
                        </div>

                        <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            John Smith
                            <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                </blockquote>
            </div>
        </div>
    </div>
</section>

<!-- Section 6 -->
<section class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Blog
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Team
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Pricing
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Terms
                </a>
            </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Dribbble</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2021 SomeCompany, Inc. All rights reserved.
        </p>
    </div>
</section>
