@props(['block'])

<label class="block">
    <div class="flex mb-1">
        <span class="font-medium">{{ $block->translatedInput('label') }}</span>

        @if ($block->checkbox('required'))
            <span
                class="ml-1 font-bold text-red-500"
                title="{{ __('field.required') }}"
                role="presentation">*</span>
        @endif
    </div>

    <div class="relative block w-full">
        {{ $slot }}
    </div>

    @if ($block->translatedInput('help'))
        <p class="mt-2 text-sm text-gray-500">{{ $block->translatedInput('help') }}</p>
    @endif
</label>
