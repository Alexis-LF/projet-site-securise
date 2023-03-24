<x-guest-layout>
    <form method="POST" action="{{ route('register') }}">
        @csrf

        
        <!-- Email Address -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>
        
        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />
            
            <x-text-input id="password" class="block mt-1 w-full"
            type="password"
                            name="password"
                            required autocomplete="new-password" />
                            
                            <x-input-error :messages="$errors->get('password')" class="mt-2" />
                        </div>
                        
                        <!-- Confirm Password -->
        <div class="mt-4">
            <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

            <x-text-input id="password_confirmation" class="block mt-1 w-full"
            type="password"
            name="password_confirmation" required autocomplete="new-password" />
            
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>
        
        <!-- Prénom -->
        <div>
            <x-input-label for="prénom" :value="__('Prénom')" />
            <x-text-input id="prénom" class="block mt-1 w-full" type="text" name="prénom" :value="old('prénom')" required autofocus autocomplete="prénom" />
            <x-input-error :messages="$errors->get('prénom')" class="mt-2" />
        </div>

        <!-- Nom -->
        <div>
            <x-input-label for="nom" :value="__('Nom')" />
            <x-text-input id="nom" class="block mt-1 w-full" type="text" name="nom" :value="old('nom')" required autofocus autocomplete="nom" />
            <x-input-error :messages="$errors->get('nom')" class="mt-2" />
        </div>

        <!-- Telephone -->
            <div>
            <x-input-label for="telephone" :value="__('Telephone')" />
            <x-text-input id="telephone" class="block mt-1 w-full" type="text" name="telephone" :value="old('telephone')" required autofocus autocomplete="telephone" />
            <x-input-error :messages="$errors->get('telephone')" class="mt-2" />
        </div>

        <!-- Date_naissance -->
        <div>
            <x-input-label for="date_naissance" :value="__('Date_naissance')" />
            <x-text-input id="date_naissance" class="block mt-1 w-full" type="text" name="date_naissance" :value="old('date_naissance')" required autofocus autocomplete="date_naissance" />
            <x-input-error :messages="$errors->get('date_naissance')" class="mt-2" />
        </div>        
        
        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>

            <x-primary-button class="ml-4">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
