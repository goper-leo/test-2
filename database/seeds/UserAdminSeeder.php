<?php

use Illuminate\Database\Seeder;

class UserAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = new App\Models\User();
        $admin->email = 'admin@gmail.com';
        $admin->password = bcrypt('secret');
        $admin->name = 'Super Admin';
        $admin->avatar_url = 'asdasd';
        $admin->is_signed_up = true;
        $admin->is_disable = false;
        $admin->is_admin = true;
        $admin->save();
    }
}
