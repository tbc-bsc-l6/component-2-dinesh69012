<x-admin-layout>

    <x-dashboard-navbar route="{{ route('comments.index') }}"/>

    <div class="dashboard">
        <form action="{{ route('comments.update', $comment->id) }}" id="edit_comment" method="POST">
            @csrf
            @method('PATCH')
            <div class="welcome-2">Edit comment</div>
            <div class="body_form">
                <label>Name and/or Surname</label>
                <input type="text" name="name" autocomplete="off" value="{{ $comment->name }}">
                <label>Text</label>
                <textarea name="body">{{ $comment->body }}</textarea>
                <input type="submit" value="Edytuj">
            </div>
        </form>
    </div>
</x-admin-layout>
