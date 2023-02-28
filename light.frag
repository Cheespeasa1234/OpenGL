#version 330 core

out vec4 FragColor;

unform vec4 lightColor;

void main()
{
	FragColor = lightColor;
}