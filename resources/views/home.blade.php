@extends('layouts.app')

@section('content')

        <router-view v-bind:user-auth="{{ Auth::user() }}"></router-view>

@endsection
