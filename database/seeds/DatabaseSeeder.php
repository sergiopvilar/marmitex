<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call('RoleSeeder');
        $this->call('UserSeeder');

        Model::reguard();
    }
}

class RoleSeeder extends Seeder {

    public function run() {

        Sentinel::getRoleRepository()->createModel()->create([
            'name' => 'Admin',
            'slug' => 'admin',
            'permissions' => [
                'admin' => true,
            ]
        ]);

        Sentinel::getRoleRepository()->createModel()->create([
            'name' => 'Cliente',
            'slug' => 'cliente',
            'permissions' => [
                'cliente' => true,
            ]
        ]);

    }

}

class UserSeeder extends Seeder {

    public function run() {

        $_user = Sentinel::register([
            'email' => 'admin@me.com',
            'password' => 'abc123'
        ], true);

        $group = Sentinel::findRoleByName('Admin');
        $group->users()->attach($_user);

    }

}
